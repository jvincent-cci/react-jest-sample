import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0516 } from './Component0516';
    import { helper090 } from '../../helpers/helper090';

    describe('Component0516', () => {
      it('applies helper090 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0516 label="Generated 0516" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0516' }));

        expect(onApply).toHaveBeenCalledWith(helper090('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0516 label="Generated 0516" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0516' })).toBeDisabled();
      });
    });
