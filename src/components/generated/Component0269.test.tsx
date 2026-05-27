import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0269 } from './Component0269';
    import { helper099 } from '../../helpers/helper099';

    describe('Component0269', () => {
      it('applies helper099 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0269 label="Generated 0269" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0269' }));

        expect(onApply).toHaveBeenCalledWith(helper099('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0269 label="Generated 0269" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0269' })).toBeDisabled();
      });
    });
