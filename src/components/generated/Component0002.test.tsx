import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0002 } from './Component0002';
    import { helper009 } from '../../helpers/helper009';

    describe('Component0002', () => {
      it('applies helper009 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0002 label="Generated 0002" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0002' }));

        expect(onApply).toHaveBeenCalledWith(helper009('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0002 label="Generated 0002" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0002' })).toBeDisabled();
      });
    });
