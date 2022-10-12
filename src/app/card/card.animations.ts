import { animate, animateChild, group, keyframes, query, sequence, state, style, transition, trigger } from '@angular/animations';

export const cardToggleTrigger = trigger('cardToggle', [
  state('collapsed',
    style({
      height: '*',
      borderRadius: '*'
    })
  ),
  state('expanded',
    style({
      height: '100vh',
      borderRadius: 0
    })
  ),
  transition('collapsed => expanded', [
    sequence([
      group([
          query('@cardCover', animateChild()),
          query('@cardContent', animateChild(), {
            delay: '460ms'
          }),
          animate('450ms cubic-bezier(0.83, 0, 0.17, 1)')
        ]
      )
    ])
  ]),
  transition('expanded => collapsed', [
    sequence([
      group([
          query('*', animateChild()),
          animate('450ms cubic-bezier(0.83, 0, 0.17, 1)')
        ]
      )
    ])
  ])
]);
export const cardCoverTrigger = trigger('cardCover', [
  state('collapsed',
    style({
      borderRadius: '*',
      paddingTop: 0
    })
  ),
  state('expanded',
    style({
      borderRadius: 0,
      paddingTop: '20px'
    })
  ),
  transition('collapsed => expanded', [
    animate('600ms ease-in-out', keyframes([
      style({ padding: '0', offset: .2 }),
      style({ padding: '2px', paddingTop: 0, offset: 0.5 }),
      style({ padding: '0', borderRadius: 0, paddingTop: '20px', offset: 1 })
    ]))
  ]),
  transition('expanded => collapsed', [
    animate('600ms ease-in-out', keyframes([
      style({ padding: '0', borderRadius: 0, paddingTop: '20px', offset: .2 }),
      style({ padding: '2px', paddingTop: 0, borderRadius: '*', offset: 0.5 }),
      style({ padding: '0', offset: 1 })
    ]))
  ])
]);
export const cardContentTrigger = trigger('cardContent', [
  state('visible',
    style({
      opacity: '1'
    })
  ),
  state('void',
    style({
      opacity: '0'
    })),
  transition('* <=> *', [
    animate('200ms ease')
  ])
]);
