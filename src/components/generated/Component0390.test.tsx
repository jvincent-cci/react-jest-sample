import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0390 } from './Component0390';
    import { helper036 } from '../../helpers/helper036';

    describe('Component0390', () => {
      it('applies helper036 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0390 label="Generated 0390" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0390' }));

        expect(onApply).toHaveBeenCalledWith(helper036('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0390 label="Generated 0390" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0390' })).toBeDisabled();
      });
    });
