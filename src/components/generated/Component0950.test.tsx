import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0950 } from './Component0950';
    import { helper058 } from '../../helpers/helper058';

    describe('Component0950', () => {
      it('applies helper058 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0950 label="Generated 0950" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0950' }));

        expect(onApply).toHaveBeenCalledWith(helper058('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0950 label="Generated 0950" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0950' })).toBeDisabled();
      });
    });
