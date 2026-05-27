import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0175 } from './Component0175';
    import { helper041 } from '../../helpers/helper041';

    describe('Component0175', () => {
      it('applies helper041 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0175 label="Generated 0175" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0175' }));

        expect(onApply).toHaveBeenCalledWith(helper041('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0175 label="Generated 0175" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0175' })).toBeDisabled();
      });
    });
