import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0095 } from './Component0095';
    import { helper008 } from '../../helpers/helper008';

    describe('Component0095', () => {
      it('applies helper008 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0095 label="Generated 0095" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0095' }));

        expect(onApply).toHaveBeenCalledWith(helper008('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0095 label="Generated 0095" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0095' })).toBeDisabled();
      });
    });
