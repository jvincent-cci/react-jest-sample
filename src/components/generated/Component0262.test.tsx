import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0262 } from './Component0262';
    import { helper014 } from '../../helpers/helper014';

    describe('Component0262', () => {
      it('applies helper014 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0262 label="Generated 0262" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0262' }));

        expect(onApply).toHaveBeenCalledWith(helper014('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0262 label="Generated 0262" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0262' })).toBeDisabled();
      });
    });
