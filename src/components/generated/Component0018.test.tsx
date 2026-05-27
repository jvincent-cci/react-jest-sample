import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0018 } from './Component0018';
    import { helper096 } from '../../helpers/helper096';

    describe('Component0018', () => {
      it('applies helper096 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0018 label="Generated 0018" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0018' }));

        expect(onApply).toHaveBeenCalledWith(helper096('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0018 label="Generated 0018" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0018' })).toBeDisabled();
      });
    });
