import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0083 } from './Component0083';
    import { helper070 } from '../../helpers/helper070';

    describe('Component0083', () => {
      it('applies helper070 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0083 label="Generated 0083" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0083' }));

        expect(onApply).toHaveBeenCalledWith(helper070('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0083 label="Generated 0083" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0083' })).toBeDisabled();
      });
    });
