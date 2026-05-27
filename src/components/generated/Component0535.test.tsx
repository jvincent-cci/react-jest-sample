import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0535 } from './Component0535';
    import { helper024 } from '../../helpers/helper024';

    describe('Component0535', () => {
      it('applies helper024 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0535 label="Generated 0535" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0535' }));

        expect(onApply).toHaveBeenCalledWith(helper024('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0535 label="Generated 0535" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0535' })).toBeDisabled();
      });
    });
