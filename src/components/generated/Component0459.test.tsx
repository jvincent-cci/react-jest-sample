import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0459 } from './Component0459';
    import { helper035 } from '../../helpers/helper035';

    describe('Component0459', () => {
      it('applies helper035 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0459 label="Generated 0459" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0459' }));

        expect(onApply).toHaveBeenCalledWith(helper035('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0459 label="Generated 0459" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0459' })).toBeDisabled();
      });
    });
