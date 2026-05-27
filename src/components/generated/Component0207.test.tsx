import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0207 } from './Component0207';
    import { helper043 } from '../../helpers/helper043';

    describe('Component0207', () => {
      it('applies helper043 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0207 label="Generated 0207" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0207' }));

        expect(onApply).toHaveBeenCalledWith(helper043('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0207 label="Generated 0207" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0207' })).toBeDisabled();
      });
    });
