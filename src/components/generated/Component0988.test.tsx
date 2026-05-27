import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0988 } from './Component0988';
    import { helper019 } from '../../helpers/helper019';

    describe('Component0988', () => {
      it('applies helper019 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0988 label="Generated 0988" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0988' }));

        expect(onApply).toHaveBeenCalledWith(helper019('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0988 label="Generated 0988" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0988' })).toBeDisabled();
      });
    });
