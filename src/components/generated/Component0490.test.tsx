import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0490 } from './Component0490';
    import { helper076 } from '../../helpers/helper076';

    describe('Component0490', () => {
      it('applies helper076 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0490 label="Generated 0490" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0490' }));

        expect(onApply).toHaveBeenCalledWith(helper076('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0490 label="Generated 0490" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0490' })).toBeDisabled();
      });
    });
