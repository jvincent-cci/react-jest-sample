import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0937 } from './Component0937';
    import { helper021 } from '../../helpers/helper021';

    describe('Component0937', () => {
      it('applies helper021 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0937 label="Generated 0937" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0937' }));

        expect(onApply).toHaveBeenCalledWith(helper021('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0937 label="Generated 0937" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0937' })).toBeDisabled();
      });
    });
