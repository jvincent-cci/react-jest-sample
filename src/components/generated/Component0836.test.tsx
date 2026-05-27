import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0836 } from './Component0836';
    import { helper097 } from '../../helpers/helper097';

    describe('Component0836', () => {
      it('applies helper097 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0836 label="Generated 0836" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0836' }));

        expect(onApply).toHaveBeenCalledWith(helper097('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0836 label="Generated 0836" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0836' })).toBeDisabled();
      });
    });
