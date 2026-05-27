import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0233 } from './Component0233';
    import { helper058 } from '../../helpers/helper058';

    describe('Component0233', () => {
      it('applies helper058 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0233 label="Generated 0233" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0233' }));

        expect(onApply).toHaveBeenCalledWith(helper058('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0233 label="Generated 0233" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0233' })).toBeDisabled();
      });
    });
