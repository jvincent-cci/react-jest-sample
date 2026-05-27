import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0667 } from './Component0667';
    import { helper092 } from '../../helpers/helper092';

    describe('Component0667', () => {
      it('applies helper092 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0667 label="Generated 0667" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0667' }));

        expect(onApply).toHaveBeenCalledWith(helper092('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0667 label="Generated 0667" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0667' })).toBeDisabled();
      });
    });
