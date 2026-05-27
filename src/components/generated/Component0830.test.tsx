import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0830 } from './Component0830';
    import { helper060 } from '../../helpers/helper060';

    describe('Component0830', () => {
      it('applies helper060 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0830 label="Generated 0830" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0830' }));

        expect(onApply).toHaveBeenCalledWith(helper060('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0830 label="Generated 0830" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0830' })).toBeDisabled();
      });
    });
