import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0172 } from './Component0172';
    import { helper058 } from '../../helpers/helper058';

    describe('Component0172', () => {
      it('applies helper058 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0172 label="Generated 0172" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0172' }));

        expect(onApply).toHaveBeenCalledWith(helper058('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0172 label="Generated 0172" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0172' })).toBeDisabled();
      });
    });
