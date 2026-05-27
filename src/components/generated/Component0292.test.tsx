import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0292 } from './Component0292';
    import { helper005 } from '../../helpers/helper005';

    describe('Component0292', () => {
      it('applies helper005 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0292 label="Generated 0292" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0292' }));

        expect(onApply).toHaveBeenCalledWith(helper005('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0292 label="Generated 0292" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0292' })).toBeDisabled();
      });
    });
