USE [demo1]
GO

/****** Object:  Table [dbo].[exchanges]    Script Date: 03/08/2018 23:37:14 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

SET ANSI_PADDING ON
GO

CREATE TABLE [dbo].[exchanges](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[exchangeName] [varchar](50) NULL,
	[timestamp] [varchar](50) NULL,
	[last] [varchar](50) NULL,
	[high] [varchar](50) NULL,
	[low] [varchar](50) NULL,
	[bid] [varchar](50) NULL,
	[ask] [varchar](50) NULL
) ON [PRIMARY]

GO

SET ANSI_PADDING OFF
GO


