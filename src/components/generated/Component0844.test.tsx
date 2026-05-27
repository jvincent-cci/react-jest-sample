import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0844 } from './Component0844';
    import { helper076 } from '../../helpers/helper076';

    describe('Component0844', () => {
      it('applies helper076 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0844 label="Generated 0844" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0844' }));

        expect(onApply).toHaveBeenCalledWith(helper076('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0844 label="Generated 0844" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0844' })).toBeDisabled();
      });
    });
