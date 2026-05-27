import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0391 } from './Component0391';
    import { helper089 } from '../../helpers/helper089';

    describe('Component0391', () => {
      it('applies helper089 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0391 label="Generated 0391" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0391' }));

        expect(onApply).toHaveBeenCalledWith(helper089('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0391 label="Generated 0391" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0391' })).toBeDisabled();
      });
    });
