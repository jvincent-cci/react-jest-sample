import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0437 } from './Component0437';
    import { helper090 } from '../../helpers/helper090';

    describe('Component0437', () => {
      it('applies helper090 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0437 label="Generated 0437" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0437' }));

        expect(onApply).toHaveBeenCalledWith(helper090('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0437 label="Generated 0437" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0437' })).toBeDisabled();
      });
    });
