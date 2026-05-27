import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0174 } from './Component0174';
    import { helper004 } from '../../helpers/helper004';

    describe('Component0174', () => {
      it('applies helper004 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0174 label="Generated 0174" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0174' }));

        expect(onApply).toHaveBeenCalledWith(helper004('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0174 label="Generated 0174" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0174' })).toBeDisabled();
      });
    });
