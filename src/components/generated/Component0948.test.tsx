import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0948 } from './Component0948';
    import { helper027 } from '../../helpers/helper027';

    describe('Component0948', () => {
      it('applies helper027 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0948 label="Generated 0948" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0948' }));

        expect(onApply).toHaveBeenCalledWith(helper027('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0948 label="Generated 0948" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0948' })).toBeDisabled();
      });
    });
