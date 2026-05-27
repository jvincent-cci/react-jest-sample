import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0126 } from './Component0126';
    import { helper058 } from '../../helpers/helper058';

    describe('Component0126', () => {
      it('applies helper058 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0126 label="Generated 0126" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0126' }));

        expect(onApply).toHaveBeenCalledWith(helper058('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0126 label="Generated 0126" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0126' })).toBeDisabled();
      });
    });
