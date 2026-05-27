import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0738 } from './Component0738';
    import { helper096 } from '../../helpers/helper096';

    describe('Component0738', () => {
      it('applies helper096 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0738 label="Generated 0738" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0738' }));

        expect(onApply).toHaveBeenCalledWith(helper096('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0738 label="Generated 0738" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0738' })).toBeDisabled();
      });
    });
