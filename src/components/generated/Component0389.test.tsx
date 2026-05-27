import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0389 } from './Component0389';
    import { helper041 } from '../../helpers/helper041';

    describe('Component0389', () => {
      it('applies helper041 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0389 label="Generated 0389" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0389' }));

        expect(onApply).toHaveBeenCalledWith(helper041('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0389 label="Generated 0389" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0389' })).toBeDisabled();
      });
    });
