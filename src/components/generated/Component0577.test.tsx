import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0577 } from './Component0577';
    import { helper076 } from '../../helpers/helper076';

    describe('Component0577', () => {
      it('applies helper076 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0577 label="Generated 0577" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0577' }));

        expect(onApply).toHaveBeenCalledWith(helper076('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0577 label="Generated 0577" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0577' })).toBeDisabled();
      });
    });
