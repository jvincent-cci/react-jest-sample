import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0942 } from './Component0942';
    import { helper001 } from '../../helpers/helper001';

    describe('Component0942', () => {
      it('applies helper001 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0942 label="Generated 0942" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0942' }));

        expect(onApply).toHaveBeenCalledWith(helper001('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0942 label="Generated 0942" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0942' })).toBeDisabled();
      });
    });
