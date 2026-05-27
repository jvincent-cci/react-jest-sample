import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0089 } from './Component0089';
    import { helper066 } from '../../helpers/helper066';

    describe('Component0089', () => {
      it('applies helper066 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0089 label="Generated 0089" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0089' }));

        expect(onApply).toHaveBeenCalledWith(helper066('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0089 label="Generated 0089" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0089' })).toBeDisabled();
      });
    });
