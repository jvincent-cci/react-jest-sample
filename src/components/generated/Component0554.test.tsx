import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0554 } from './Component0554';
    import { helper097 } from '../../helpers/helper097';

    describe('Component0554', () => {
      it('applies helper097 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0554 label="Generated 0554" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0554' }));

        expect(onApply).toHaveBeenCalledWith(helper097('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0554 label="Generated 0554" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0554' })).toBeDisabled();
      });
    });
