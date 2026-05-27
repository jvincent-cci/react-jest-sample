import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0811 } from './Component0811';
    import { helper021 } from '../../helpers/helper021';

    describe('Component0811', () => {
      it('applies helper021 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0811 label="Generated 0811" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0811' }));

        expect(onApply).toHaveBeenCalledWith(helper021('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0811 label="Generated 0811" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0811' })).toBeDisabled();
      });
    });
