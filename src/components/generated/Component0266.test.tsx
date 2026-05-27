import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0266 } from './Component0266';
    import { helper024 } from '../../helpers/helper024';

    describe('Component0266', () => {
      it('applies helper024 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0266 label="Generated 0266" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0266' }));

        expect(onApply).toHaveBeenCalledWith(helper024('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0266 label="Generated 0266" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0266' })).toBeDisabled();
      });
    });
