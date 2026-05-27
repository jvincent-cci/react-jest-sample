import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0179 } from './Component0179';
    import { helper011 } from '../../helpers/helper011';

    describe('Component0179', () => {
      it('applies helper011 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0179 label="Generated 0179" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0179' }));

        expect(onApply).toHaveBeenCalledWith(helper011('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0179 label="Generated 0179" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0179' })).toBeDisabled();
      });
    });
