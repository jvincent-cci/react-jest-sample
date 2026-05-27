import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0458 } from './Component0458';
    import { helper058 } from '../../helpers/helper058';

    describe('Component0458', () => {
      it('applies helper058 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0458 label="Generated 0458" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0458' }));

        expect(onApply).toHaveBeenCalledWith(helper058('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0458 label="Generated 0458" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0458' })).toBeDisabled();
      });
    });
