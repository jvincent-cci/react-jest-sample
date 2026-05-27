import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0679 } from './Component0679';
    import { helper008 } from '../../helpers/helper008';

    describe('Component0679', () => {
      it('applies helper008 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0679 label="Generated 0679" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0679' }));

        expect(onApply).toHaveBeenCalledWith(helper008('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0679 label="Generated 0679" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0679' })).toBeDisabled();
      });
    });
