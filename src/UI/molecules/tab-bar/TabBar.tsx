import React, { ReactNode } from 'react';
import { View, Text, Pressable } from 'react-native';

import type { TypeTabBarItem } from '@/types/tournament';

export type TypeTabBarProps = {
	items: TypeTabBarItem[];
	activeKey: string;
	onChange: (key: string) => void;
};

const TabBar = ({ items, activeKey, onChange }: TypeTabBarProps) => {
	return (
		<View className='flex-row items-center self-start rounded-full border border-neutral-gray bg-gray p-1'>
			{items.map((item, index) => {
				const isActive = item.key === activeKey;
				const color = isActive ? '#D9D9D9' : '#ABA7A7';

				return (
					<React.Fragment key={item.key}>
						<Pressable
							onPress={() => onChange(item.key)}
							className={`flex-row items-center px-4 py-2 rounded-full ${
								isActive ? 'bg-neutral-gray' : ''
							}`}
							testID={`tab-bar-item-${item.key}`}
						>
							{item.icon && (
								<View className='mr-2'>
									{item.icon({ color, width: 16, height: 16 })}
								</View>
							)}
							<Text
								className={`uppercase font-bold ${
									isActive ? 'text-light' : 'text-light-gray'
								}`}
							>
								[{item.label}]
							</Text>
						</Pressable>

						{/* Separator */}
						{index < items.length - 1 &&
							!isActive &&
							items[index + 1].key !== activeKey && (
								<View
									className='mx-1 h-4 w-[1px] bg-neutral-gray'
									testID={`tab-bar-separator-${index}`}
								/>
							)}
					</React.Fragment>
				);
			})}
		</View>
	);
};

export default TabBar;
