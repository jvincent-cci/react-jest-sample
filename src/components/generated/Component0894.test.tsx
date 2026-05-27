import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0894 } from './Component0894';
    import { helper041 } from '../../helpers/helper041';

    describe('Component0894', () => {
      it('applies helper041 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0894 label="Generated 0894" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0894' }));

        expect(onApply).toHaveBeenCalledWith(helper041('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0894 label="Generated 0894" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0894' })).toBeDisabled();
      });
    });
