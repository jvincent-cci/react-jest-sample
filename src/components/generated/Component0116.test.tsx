import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0116 } from './Component0116';
    import { helper071 } from '../../helpers/helper071';

    describe('Component0116', () => {
      it('applies helper071 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0116 label="Generated 0116" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0116' }));

        expect(onApply).toHaveBeenCalledWith(helper071('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0116 label="Generated 0116" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0116' })).toBeDisabled();
      });
    });
