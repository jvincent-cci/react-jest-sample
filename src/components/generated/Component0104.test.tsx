import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0104 } from './Component0104';
    import { helper092 } from '../../helpers/helper092';

    describe('Component0104', () => {
      it('applies helper092 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0104 label="Generated 0104" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0104' }));

        expect(onApply).toHaveBeenCalledWith(helper092('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0104 label="Generated 0104" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0104' })).toBeDisabled();
      });
    });
