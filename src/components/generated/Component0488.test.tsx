import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0488 } from './Component0488';
    import { helper081 } from '../../helpers/helper081';

    describe('Component0488', () => {
      it('applies helper081 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0488 label="Generated 0488" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0488' }));

        expect(onApply).toHaveBeenCalledWith(helper081('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0488 label="Generated 0488" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0488' })).toBeDisabled();
      });
    });
