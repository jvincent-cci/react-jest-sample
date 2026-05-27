import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0850 } from './Component0850';
    import { helper097 } from '../../helpers/helper097';

    describe('Component0850', () => {
      it('applies helper097 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0850 label="Generated 0850" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0850' }));

        expect(onApply).toHaveBeenCalledWith(helper097('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0850 label="Generated 0850" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0850' })).toBeDisabled();
      });
    });
