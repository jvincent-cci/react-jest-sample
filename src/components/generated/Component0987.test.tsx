import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0987 } from './Component0987';
    import { helper018 } from '../../helpers/helper018';

    describe('Component0987', () => {
      it('applies helper018 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0987 label="Generated 0987" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0987' }));

        expect(onApply).toHaveBeenCalledWith(helper018('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0987 label="Generated 0987" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0987' })).toBeDisabled();
      });
    });
