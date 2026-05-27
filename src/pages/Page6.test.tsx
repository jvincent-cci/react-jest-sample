import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Page6 } from './Page6';

    describe('Page6', () => {
      it('updates an input through its generated button', async () => {
        const user = userEvent.setup();

        render(<Page6 />);
        const input = screen.getByRole('textbox', { name: 'Page 6 field 1 input' });

        await user.clear(input);
        await user.type(input, 'sample value');
        await user.click(screen.getByRole('button', { name: 'Run Page 6 field 1' }));

        expect(input).not.toHaveValue('sample value');
        expect(input).not.toHaveValue('');
      });

      it('disables the generated button for blank input', async () => {
        const user = userEvent.setup();

        render(<Page6 />);
        const input = screen.getByRole('textbox', { name: 'Page 6 field 1 input' });

        await user.clear(input);

        expect(screen.getByRole('button', { name: 'Run Page 6 field 1' })).toBeDisabled();
      });
    });
