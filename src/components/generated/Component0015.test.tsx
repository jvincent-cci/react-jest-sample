import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0015 } from './Component0015';
    import { helper060 } from '../../helpers/helper060';

    describe('Component0015', () => {
      it('applies helper060 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0015 label="Generated 0015" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0015' }));

        expect(onApply).toHaveBeenCalledWith(helper060('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0015 label="Generated 0015" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0015' })).toBeDisabled();
      });
    });
