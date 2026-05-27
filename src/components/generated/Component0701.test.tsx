import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0701 } from './Component0701';
    import { helper090 } from '../../helpers/helper090';

    describe('Component0701', () => {
      it('applies helper090 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0701 label="Generated 0701" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0701' }));

        expect(onApply).toHaveBeenCalledWith(helper090('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0701 label="Generated 0701" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0701' })).toBeDisabled();
      });
    });
