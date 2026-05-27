import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0282 } from './Component0282';
    import { helper097 } from '../../helpers/helper097';

    describe('Component0282', () => {
      it('applies helper097 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0282 label="Generated 0282" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0282' }));

        expect(onApply).toHaveBeenCalledWith(helper097('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0282 label="Generated 0282" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0282' })).toBeDisabled();
      });
    });
