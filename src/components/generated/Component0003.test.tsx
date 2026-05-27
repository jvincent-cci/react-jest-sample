import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0003 } from './Component0003';
    import { helper058 } from '../../helpers/helper058';

    describe('Component0003', () => {
      it('applies helper058 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0003 label="Generated 0003" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0003' }));

        expect(onApply).toHaveBeenCalledWith(helper058('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0003 label="Generated 0003" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0003' })).toBeDisabled();
      });
    });
