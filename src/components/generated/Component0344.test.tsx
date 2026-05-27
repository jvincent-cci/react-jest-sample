import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0344 } from './Component0344';
    import { helper015 } from '../../helpers/helper015';

    describe('Component0344', () => {
      it('applies helper015 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0344 label="Generated 0344" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0344' }));

        expect(onApply).toHaveBeenCalledWith(helper015('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0344 label="Generated 0344" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0344' })).toBeDisabled();
      });
    });
