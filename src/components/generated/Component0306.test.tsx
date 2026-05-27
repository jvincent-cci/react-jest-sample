import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0306 } from './Component0306';
    import { helper018 } from '../../helpers/helper018';

    describe('Component0306', () => {
      it('applies helper018 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0306 label="Generated 0306" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0306' }));

        expect(onApply).toHaveBeenCalledWith(helper018('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0306 label="Generated 0306" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0306' })).toBeDisabled();
      });
    });
